function dnpm { docker-compose exec app npm $args }
function dnest { docker-compose exec app npx nest $args }
function dprisma { docker-compose exec app npx prisma $args }