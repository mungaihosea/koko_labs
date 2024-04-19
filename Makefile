
.PHONY: help
help:
	@echo "Usage: make [target]"
	@echo "Targets:"
	@echo "  up       : Start the Docker Compose services"
	@echo "  down     : Stop and remove the Docker Compose services"

.PHONY: up
up:
	docker compose -f backend/docker-compose.yaml up --build -d
	docker compose -f frontend/docker-compose.yaml up --build -d

.PHONY: down
down:
	docker compose -f backend/docker-compose.yaml down
	docker compose -f frontend/docker-compose.yaml down
