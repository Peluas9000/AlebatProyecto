// Custom error classes for better error handling
class ValidateDataError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidateDataError";
    Object.setPrototypeOf(this, ValidateDataError.prototype);
  }
}

class NetworkError extends Error {
  constructor(message) {
    super(message);
    this.name = "NetworkError";
    Object.setPrototypeOf(this, NetworkError.prototype);
  }
}

class ParseError extends Error {
  constructor(message) {
    super(message);
    this.name = "ParseError";
    Object.setPrototypeOf(this, ParseError.prototype);
  }
}

async function getData() {
  const API_URL = "https://pokeapi.co/api/v2/pokemon/ditto";
  const TIMEOUT_MS = 5000; // 5 segundos timeout

  console.log("🚀 Iniciando servicio...");
  console.group("📡 Fetch a Pokemon API");

  try {
    // Validar URL
    if (!API_URL || typeof API_URL !== "string") {
      throw new ValidateDataError("URL inválida o no disponible");
    }

    console.log(`📍 URL: ${API_URL}`);

    // Fetch con timeout
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), TIMEOUT_MS);

    const response = await fetch(API_URL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    // Validar status de respuesta
    if (!response.ok) {
      throw new ValidateDataError(
        `HTTP ${response.status}: ${response.statusText}`,
      );
    }

    console.log(`✅ Status: ${response.status} ${response.statusText}`);

    // Validar content-type
    const contentType = response.headers.get("content-type");
    if (!contentType || !contentType.includes("application/json")) {
      throw new ParseError(
        `Content-Type inválido: ${contentType}. Se esperaba application/json`,
      );
    }

    // Parsear JSON
    let data;
    try {
      data = await response.json();
    } catch (parseErr) {
      throw new ParseError(`Error al parsear JSON: ${parseErr.message}`);
    }

    // Validar que existan datos
    if (!data) {
      throw new ValidateDataError("Datos inválidos: respuesta vacía");
    }

    console.log("📦 Datos recibidos:");
    console.log(data);
    console.log(`\n✨ Pokemon: ${data.name}`);
    console.log(`📊 ID: ${data.id}`);
    console.log(`⚖️  Peso: ${data.weight / 10} kg`);
    console.log(`📏 Altura: ${data.height / 10} m`);
    console.log(
      `🎯 Habilidades: ${data.abilities.map((a) => a.ability.name).join(", ")}`,
    );

    console.log("\n✅ Servicio completado exitosamente");
    return data;
  } catch (error) {
    console.error("❌ Error capturado:");

    if (error instanceof ValidateDataError) {
      console.error(`[ValidateDataError] ${error.message}`);
      console.group("Detalles del error:");
      console.error("Tipo: Validación de datos");
      console.error("Acción recomendada: Verificar datos o parámetros");
      console.groupEnd();
    } else if (error instanceof ParseError) {
      console.error(`[ParseError] ${error.message}`);
      console.group("Detalles del error:");
      console.error("Tipo: Error de parseo");
      console.error("Acción recomendada: Verificar formato de respuesta");
      console.groupEnd();
    } else if (error instanceof NetworkError) {
      console.error(`[NetworkError] ${error.message}`);
      console.group("Detalles del error:");
      console.error("Tipo: Error de red");
      console.error("Acción recomendada: Verificar conexión a internet");
      console.groupEnd();
    } else if (error.name === "AbortError") {
      console.error("[TimeoutError] La solicitud superó el tiempo límite");
      console.group("Detalles del error:");
      console.error("Tipo: Timeout");
      console.error(`Tiempo límite: ${TIMEOUT_MS}ms`);
      console.error("Acción recomendada: Verificar velocidad de conexión");
      console.groupEnd();
    } else if (error instanceof TypeError) {
      console.error(`[TypeError] ${error.message}`);
      console.group("Detalles del error:");
      console.error("Tipo: Error de tipo o red");
      console.error(
        "Acción recomendada: Verificar disponibilidad del servidor",
      );
      console.groupEnd();
    } else {
      console.error(`[Error descono] La solicitud superó el tiempo límite");
      console.group("Detalles del error:");
      console.error("Tipo: Timeoutcido] ${error.message}`);
      console.error(error.stack);
    }

    return null;
  } finally {
    console.groupEnd();
    console.log("🏁 Fin de servicio");
  }
}

// Ejecutar la función
getData();
