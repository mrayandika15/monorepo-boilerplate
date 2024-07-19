# Boiler plate starter

## ✅ Apps and Packages

- `admin`: a [Next.js](https://nextjs.org/) app
- `customer`: another [Next.js](https://nextjs.org/) app
- `services` : containing [Directus](https://directus.io/) app
- `@repo/ui`: a stub React component library shared by both `web` and `docs` applications
- `@repo/eslint-config`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `@repo/typescript-config`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

## ⛽️ Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

## 🧑‍💻 Run on your local

### ❶ setup `.env` inside the `/apps/services` directory
insert this following script based on the directus documentations [Directus Docs](https://docs.directus.io/self-hosted/config-options.html)
```
#  the first user that's automatically created when using directus bootstrap.
ADMIN_EMAIL= 
ADMIN_PASSWORD=

# The host on which the Directus server will run
HOST="0.0.0.0" 

# The port on which the Directus server will be accessible
PORT=8055

# The database client type (e.g., "pg" for PostgreSQL)
DB_CLIENT="pg"

# The host address of the database server
DB_HOST="localhost"

# The port number on which the database server is listening
DB_PORT=

# The username for connecting to the database
DB_USER=

# The password for connecting to the database
DB_PASSWORD=

# The name of the database to connect to
DB_DATABASE=

```

### ❷ Build Directus Service
1. Navigate to the services directory and install dependencies:
```
cd apps/services
pnpm install
```
2. Bootstrap the Directus project:
```
npx directus bootstrap
```
Once these steps are completed, the Directus service will be ready to use.

### ❸ Serve all apps

After completing the build process, you can serve all the apps with a single command. Run the following commands in the root directory : 

```
pnpm install
pnpm dev
```
To start individual apps, use the following commands:

```
# Run only the client app
pnpm dev:client

# Run only the service app
pnpm dev:service

# Run only the panel app
pnpm dev:panel
```

### 🚀 Deployment 
Follow these steps to deploy your apps setup, which includes two Next.js apps and one Directus service, on your VPS server.

Ensure Docker and Docker Compose are installed on your VPS server. If they are not installed, you can install them with the following commands:
```
# Update package index
sudo apt update

# Install Docker
sudo apt install -y docker.io

# Install Docker Compose
sudo curl -L "https://github.com/docker/compose/releases/download/2.20.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose

# Install Git
sudo apt install -y git

```

Use Git to clone your project repository to your VPS server:

```
# Clone the repository (replace <repo-url> with your actual repository URL)
git clone <repo-url> /path/to/your/project

# Navigate to the project directory
cd /path/to/your/project/docker

```

Run the following command to build and start your Docker containers:
```
docker-compose up --build
```

Once the containers are running, you can check the logs to ensure everything is working correctly:

```
docker-compose logs
```

To stop and remove the containers, run:
```
docker-compose down

```

