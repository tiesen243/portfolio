pkm = bun

install:
	@echo "Installing dependencies..."
	@$(pkm) install

build-packages:
	@echo "Building packages..."
	@$(pkm) --filter './packages/*' build

build:
	@echo "Building application..."
	@$(pkm) --filter @yuki/kaze build

dev:
	@echo "Starting development server..."
	@$(pkm) --filter @yuki/kaze dev

lint:
	@echo "Linting code..."
	@./node_modules/.bin/oxlint --fix

format:
	@echo "Formatting code..."
	@./node_modules/.bin/oxfmt --write

