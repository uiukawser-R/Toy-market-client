import useTitle from "../../hooks/useTitle";


const Blog = () => {
    useTitle("Blog")

    return (

        <div className="mt-10 bg-slate-200">
 
            <section>

                <div>
                    <div>
                        <h2 className="font-bold text-2xl" >What is an access token and refresh token? How do they work and where should we store them on the client-side?</h2>
                        <p>Access Token : An access token is a credential granted to a user after authentication. It is a string used to access protected resources, such as APIs.

                            Refresh Token : A refresh token is a long-lived credential that is issued during authentication. It is used to obtain a new access token without requiring the user to re-authenticate. Refresh tokens have a longer expiration period and are securely stored on the client-side. They enable seamless interactions and maintain user sessions.

                            Storage on the Client-side : Access tokens are stored in memory or short-lived mechanisms like cookies or local storage for easy retrieval. Refresh tokens, being more sensitive, are securely stored server-side or in secure storage mechanisms like encrypted storage or HTTP-only cookies.</p>
                    </div>
                    <div>
                        <h2 className="font-bold text-2xl">Compare SQL and NoSQL databases?</h2>

                        <p>comparison between SQL and NoSQL databases:

                            <p>                        Data Model:
                            </p>
                            <p>
                                - SQL: Uses a structured, tabular data model with fixed schemas.

                            </p>
                            <p>                        - NoSQL: Offers flexible data models like key-value, document, columnar, or graph-based.
                            </p>
                            <p>
                                Scalability:
                            </p>
                            <p>      - SQL: Scales vertically by upgrading hardware, which can be costly and limited.
                            </p>
                            <p>                        - NoSQL: Scales horizontally by distributing data across multiple servers easily.
                            </p>
                            <p>                        Schema Flexibility:
                            </p>
                            <p>                        - SQL: Requires predefined schemas and enforces a fixed structure.
                            </p>
                            <p>                        - NoSQL: Allows dynamic and unstructured data with flexible schemas.
                            </p>
                            <p>                        Query Language:
                            </p>
                            <p>                        - SQL: Uses SQL language for querying and manipulating data, providing a standardized approach.
                            </p>
                            <p> - NoSQL: Varies between different databases, some supporting SQL-like querying, while others have their own syntax.</p>

                            <p>                        ACID Compliance:
                            </p>
                            <p> - SQL: Traditional SQL databases follow ACID properties, ensuring transactional integrity.
                            </p>
                            <p>                        - NoSQL: NoSQL databases may sacrifice strict ACID compliance for improved performance, scalability, or flexibility.
                            </p>
                            <p>                        Use Cases:
                            </p>
                            <p>                        - SQL: Suitable for applications with complex relationships, structured data, and transactions, such as financial systems or e-commerce platforms.
                            </p>
                            <p>                        - NoSQL: Ideal for handling large volumes of rapidly changing, unstructured or semi-structured data, commonly used in real-time analytics, content management, or IoT applications.
                            </p>
                        </p>

                    </div>
                    <div>
                        <h2 className="font-bold text-2xl">What is express js? What is Nest JS</h2>
                        <div>
                            <p>Express.js: Express.js is a minimalist and flexible web framework for Node.js. It provides a set of features and utilities that simplify the development of web applications and APIs. Express.js is known for its simplicity, lightweight nature, and unopinionated approach, allowing developers to have more control and freedom in building their applications.
                                Express.js focuses on providing a middleware-based architecture, where developers can define a series of middleware functions that handle requests and responses. It offers routing, HTTP utilities, template engine integration, and a wide range of third-party middleware packages to extend its functionality. Express.js is highly popular and widely used in the Node.js ecosystem.
                            </p>
                            <p>NestJS:
                                NestJS is a progressive, opinionated, and full-featured framework for building scalable and maintainable server-side applications with Node.js. It is inspired by Angular is architecture and uses TypeScript as its primary programming language. NestJS combines elements of object-oriented programming, functional programming, and reactive programming to create a robust and modular framework.
                                NestJS follows the concept of modules, decorators, and dependency injection, providing a structured and organized way to build applications. It includes features like routing, controllers, providers, middleware, authentication, and database integration. NestJS embraces conventions and provides a rich ecosystem of libraries and tools for rapid development.

                                NestJS aims to bring enterprise-grade capabilities to Node.js development, making it well-suited for building complex and scalable applications with maintainability in mind. It provides a solid foundation for building backends, microservices, and APIs.</p>
                        </div>
                    </div>
                    <div>
                        <h2 className="font-bold text-2xl">What is MongoDB aggregate and how does it work?</h2>
                        <div>
                            <p>
                                MongoDB is aggregate function is a powerful tool used to perform advanced data analysis and aggregation operations on MongoDB collections. It allows you to process and transform data within the database, providing capabilities for filtering, grouping, sorting, calculating, and projecting data.

                                The aggregate function operates on a collection and takes an array of stages as its parameter. Each stage represents a specific operation to be performed on the data. The stages are executed in the order they appear in the array, forming a pipeline where the output of one stage becomes the input for the next stage</p>
                            <p>Here is a brief explanation of some common stages used in the aggregate pipeline:

                                $match: Filters documents based on specified criteria, similar to the find query. It allows you to select only the documents that match specific conditions.

                                $group: Groups documents together based on a specified key or keys and performs aggregations on grouped data. It allows you to calculate aggregates like count, sum, average, minimum, maximum, etc. within each group.

                                $sort: Sorts documents based on specified fields and sort order.

                                $project: Allows you to reshape or modify the documents in the pipeline by selecting or excluding specific fields, creating computed fields, or renaming fields.

                                $limit and $skip: Used for pagination. $limit restricts the number of documents returned, and $skip skips a specified number of documents.

                                $lookup: Performs a join operation between collections, allowing you to fetch related documents from another collection based on matching criteria.</p>
                        </div>
                    </div>
                </div>

            </section>

        </div>



    );
};

export default Blog;