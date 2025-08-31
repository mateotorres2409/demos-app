{{/* Expand the name of the chart. */}}
{{- define "project-demo.name" -}}
{{- default .Chart.Name .Values.nameOverride | trunc 63 | trimSuffix "-" -}}
{{- end -}}

{{/* Create a default fully qualified app name. */}}
{{- define "project-demo.fullname" -}}
{{- if .Values.fullnameOverride -}}
{{- .Values.fullnameOverride | trunc 63 | trimSuffix "-" -}}
{{- else -}}
{{- $name := default .Chart.Name .Values.nameOverride -}}
{{- printf "%s" $name | trunc 63 | trimSuffix "-" -}}
{{- end -}}
{{- end -}}

{{/* Selector labels */}}
{{- define "project-demo.selectorLabels" -}}
app.kubernetes.io/name: "{{ include "project-demo.name" . }}"
app.kubernetes.io/instance: "{{ include "project-demo.fullname" . }}"
{{- end -}}

{{/* Common labels */}}
{{- define "project-demo.labels" -}}
helm.sh/chart: "{{ .Chart.Name }}-{{ .Chart.Version | replace "+" "_" }}"
{{ include "project-demo.selectorLabels" . }}
app.kubernetes.io/version: "{{ .Chart.AppVersion }}"
app.kubernetes.io/managed-by: "{{ .Release.Service }}"
environment: "{{ .Values.environment }}"
{{- end -}}
