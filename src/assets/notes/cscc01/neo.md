## Neo4j
Neo4j is a graph database.

### Setting up
Here is the Docker Compose file I use to start up a neo4j server.

`docker-compose.yml`
```yaml
version: '3'
services:
  neo:
    image: neo4j:3.5.9
    ports:
      - 7687:7687
      - 7474:7474
    volumes:
      - "neo_volume:/data"
volumes:
  neo_volume:
```

To start it up, run the following command in the directory where `docker-compose.yml` is located.
```
$ docker-compose up -d
```

Alternatively, if you use a Mac: `brew install neo4j`.

### How to use
You should be able to access a web console through `http://localhost:7474`

More information as we progress in this course...
