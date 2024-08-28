# Simple Blog Micro Service

This is a study project where I am learning about microservices by creating a simple blog application. The project follows a microservices architecture with multiple services handling different aspects of the blog.

## Project Overview

The application consists of the following microservices:

- **Client (React)**: Frontend service that allows users to interact with the blog, including creating posts and comments.
- **Posts (Node.js & Express)**: Manages blog posts, including creating, updating, and retrieving posts.
- **Comments (Node.js & Express)**: Handles comments on blog posts.
- **Event-Bus (Node.js & Express)**: Acts as the central communication hub between services, distributing events across the system.
- **Moderation (Node.js & Express)**: Responsible for moderating comments, ensuring inappropriate content is filtered out.
- **Query (Node.js & Express)**: Handles data aggregation from the other services, providing combined responses to the client.

Each service is built using **Node.js** and **Express**, and they communicate via HTTP using **Axios** for sending requests between services.

## Microservices Architecture

- **Event-Driven Architecture**: Services communicate through the **Event-Bus**. Events such as post creation, comment submission, and moderation are emitted and handled asynchronously by the relevant services.
- **Separation of Concerns**: Each service handles a specific domain, making it easier to scale, maintain, and understand.
- **Axios for HTTP Requests**: **Axios** is used to manage inter-service communication.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/simple-blog-microservice.git
   cd simple-blog-microservice
   ```
2. Install dependencies for each service:

   ```bash
    cd client
   npm install
   cd ../posts
   npm install
   cd ../comments
   npm install
   cd ../event-bus
   npm install
   cd ../moderation
   npm install
   cd ../query
   npm install
   ```

3. Start each service:
   ```bash
    # Start the client
    cd client
    npm start

    # Start the posts service
    cd ../posts
    npm start

    # Start the comments service
    cd ../comments
    npm start

    # Start the event-bus service
    cd ../event-bus
    npm start

    # Start the moderation service
    cd ../moderation
    npm start

    # Start the query service
    cd ../query
    npm start

   ```

## Usage
    1. Client: The React client allows users to create posts and leave comments. The UI interacts with the different microservices via HTTP.
    2. Posts Service: Manages post creation and fetching of posts.
    3. Comments Service: Responsible for adding comments to posts.
    4. Event-Bus: Receives and distributes events across the services. For example, when a post is created, the event-bus will notify the query service to update its aggregated data.
    5. Moderation Service: Filters out inappropriate comments before they are posted to the blog.
    6. Query Service: Aggregates data from the other services to serve combined responses to the client.

## Tech Stack

 - Frontend: React
 - Backend: Node.js, Express
 - HTTP Client: Axios
 - Microservices: Event-driven architecture

## Learning Goals

 - Understanding microservices architecture and communication.
 - Working with event-driven systems.
 - Developing a scalable, maintainable application with multiple services.
 - Hands-on experience with Axios for HTTP requests.
 - Future Enhancements
 - Add authentication for users.
 - Deploy the services using Docker and Kubernetes.
 - Improve moderation using AI-driven content filters.
 - Implement caching mechanisms for improved performance.