const express = require('express');
const { MeterProvider, PeriodicExportingMetricReader } = require("@opentelemetry/sdk-metrics");
const { OTLPMetricExporter } = require("@opentelemetry/exporter-metrics-otlp-grpc");
const { v4: uuidv4 } = require("uuid");

const app = express();
const port = process.env.PORT || 3000;

const otelCollectorUrl = process.env.OTEL_EXPORTER_OTLP_ENDPOINT || "grpc://localhost:4317";

console.log(`Using OTLP collector at: ${otelCollectorUrl}`);
const metricExporter = new OTLPMetricExporter({
  url: otelCollectorUrl
});

// Provider de métricas
const meterProvider = new MeterProvider();
meterProvider.addMetricReader(new PeriodicExportingMetricReader({
  exporter: metricExporter,
  exportIntervalMillis: 1000, // exporta cada 1s
}));

// Obtener el meter
const meter = meterProvider.getMeter("demo-nodejs");

// Crear un counter
const requestCounter = meter.createCounter("request_counter", {
  description: "Total requests received"
});

// Endpoint de prueba
app.get("/uuid", (req, res) => {
  requestCounter.add(1, { "action.type": "uuid" });
  res.json({ uuid: uuidv4() });
});

app.listen(port, () => {
  console.log(`API listening at http://localhost:${port}`);
});
