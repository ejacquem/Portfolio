all:
	npm run dev

dev:
	@echo "Running portfolio in Docker, use [npm run dev] inside docker"
	docker run -it --rm -p 3000:3000 -v $$(pwd):/app -w /app node:20 bash
# run in docker 
# npm run dev
# npx --no-install next build