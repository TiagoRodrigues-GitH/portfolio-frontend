## GitHub Copilot Chat

- Extension: 0.52.0 (prod)
- VS Code: 1.124.0 (1b50d58d73426c9171299ec4037d01365d995b78)
- OS: win32 10.0.22621 x64
- GitHub Account: TiagoRodrigues-GitH

## Network

User Settings:
```json
  "http.systemCertificatesNode": true,
  "github.copilot.advanced.debug.useElectronFetcher": true,
  "github.copilot.advanced.debug.useNodeFetcher": false,
  "github.copilot.advanced.debug.useNodeFetchFetcher": true
```

Connecting to https://api.github.com:
- DNS ipv4 Lookup: 4.228.31.149 (20 ms)
- DNS ipv6 Lookup: Error (23 ms): getaddrinfo ENOTFOUND api.github.com
- Proxy URL: None (4 ms)
- Electron fetch (configured): timed out after 10 seconds
- Node.js https: timed out after 10 seconds
- Node.js fetch: timed out after 10 seconds

Connecting to https://api.githubcopilot.com/_ping:
- DNS ipv4 Lookup: 140.82.112.21 (19 ms)
- DNS ipv6 Lookup: Error (13 ms): getaddrinfo ENOTFOUND api.githubcopilot.com
- Proxy URL: None (13 ms)
- Electron fetch (configured): HTTP 200 (423 ms)
- Node.js https: HTTP 200 (433 ms)
- Node.js fetch: HTTP 200 (459 ms)

Connecting to https://copilot-proxy.githubusercontent.com/_ping:
- DNS ipv4 Lookup: 4.228.31.153 (13 ms)
- DNS ipv6 Lookup: Error (12 ms): getaddrinfo ENOTFOUND copilot-proxy.githubusercontent.com
- Proxy URL: None (12 ms)
- Electron fetch (configured): HTTP 200 (90 ms)
- Node.js https: HTTP 200 (113 ms)
- Node.js fetch: HTTP 200 (92 ms)

Connecting to https://mobile.events.data.microsoft.com: HTTP 404 (214 ms)
Connecting to https://dc.services.visualstudio.com: HTTP 404 (681 ms)
Connecting to https://copilot-telemetry.githubusercontent.com/_ping: HTTP 200 (430 ms)
Connecting to https://copilot-telemetry.githubusercontent.com/_ping: HTTP 200 (444 ms)
Connecting to https://default.exp-tas.com: HTTP 400 (108 ms)

Number of system certificates: 130

## Documentation

In corporate networks: [Troubleshooting firewall settings for GitHub Copilot](https://docs.github.com/en/copilot/troubleshooting-github-copilot/troubleshooting-firewall-settings-for-github-copilot).
