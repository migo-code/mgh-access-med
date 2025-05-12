## Description
Book Service focused on the Study Tool review questions.
### Api
```mermaid
    sequenceDiagram
    box Frontend
        actor c as Consumer
    end
    box Backend Service
        participant api
    end
    c->>api: Request random review questions for book
    api-->>api: Fetch questions from DB
    api->>c: Return random questions and total count
```
### Review Service
Review service is responsible of generating review questions for a newly uploaded book. Generating a review is a long running task.

```mermaid
sequenceDiagram
    consumer->>api: Upload new book
    api->api: save book
    api-->>consumer: ok
    api->>RabbitMQ: Send an event
    activate Review
    RabbitMQ->>Review: Consume event
    Review->Review:Create Review questions
    Review->>RabbitMQ: Send a task
    deactivate Review
```