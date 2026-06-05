# Redis API Lab

A simple project for experimenting with Redis in backend applications. This repository focuses on implementing common Redis use cases such as caching and rate limiting to improve API performance, scalability, and security.

## Features

### 🚀 Caching

* Cache API responses using Redis
* Reduce database queries
* Improve response times

#### Flow

```text
Client
   ↓
API
   ↓
Redis Cache
   ↓ (Cache Miss)
Database
```

---

### 🛡️ Rate Limiting

* Limit requests per IP address
* Prevent spam and abuse
* Store rate limit data in Redis
* Easy integration with Elysia middleware


## Tech Stack

* Bun
* TypeScript
* Elysia
* Redis
* rate-limiter-flexible

