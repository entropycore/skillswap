import Fastify from "fastify";

const app = Fastify({ logger: true });

app.get("/health",async() =>{
  return { status : "ok", timestamp: new Date().toISOString()};
})

const port = 4000;

app.listen({port,host:"0.0.0.0"},(err) =>{
  if(err) {
    app.log.error(err);
    process.exit(1);
  }
});