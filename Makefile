.PHONY: clean build link start dev

build:
	npm run lint && npm run build

link:
	npm link

start:
	cd ~/.n8n/custom && npm link @Multiculous/n8n-nodes-whatsapp && n8n start

start-dev:
	cd ~/.n8n/custom && npm link @Multiculous/n8n-nodes-whatsapp && N8N_WAHA_MODE=dev n8n start

tests:
	npm run test

dev:
	make clean
	make tests
	make build
	make link
	make start

clean:
	rm -rf ./dist

up-swagger:
	wget -qO- http://localhost:3000/-json | jq '.' > ./nodes/WAHA/openapi/openapi.json
