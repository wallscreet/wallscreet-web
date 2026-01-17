---
title: "Exploring Encrypted Multi-Hop Mesh Networks"
date: "2024-8-10"
description: "A project outline to better understand multi-hop mesh networks and potentional applications."
author: "@wallscreet"
---

## Exploring Encrypted Multi-Hop Mesh Networks

![Graph Network Image](/blog-images/Graph-Neural-Networks.webp)

## 1. Define Project Requirements and Objectives

### Goal Setting

- Determine the specific goals of our mesh network (e.g., range, data rate, encryption strength).
- Goal: Off grid survival database and text comms protocol.
- Goal: Private AI
- Vector db
- YAML conversation history (easier to encrypt?)
- Personalized graph node with agent capabilities.

### Use Case Analysis

- Identify the key use cases, like disaster recovery, remote sensor networks, or secure communications.
- Use Case: Emergency Comms
- Use Case: Survival specific training and knowledgebase access (Foxfire books, Anarchist Cookbook, Coding docs, embedded programming, gray-hat capable, etc..)
- Use Case: Incorporating remote sensors is straight forward enough, I don't see why the base station shouldn't monitor environmental data within range.

### Hardware Selection

- Choose the microcontrollers and radios (LoRa, ESP32, etc..) that will meet our range and data rate needs.
- ESP32 S3 based. Will try micropython for consistency in code but python may not have all capabilities I need for embedded.
- API based access (FastAPI, Ollama connector run local.)

### Regulatory Compliance

- Understand the legal requirements, such as frequency regulations, power limits, and encryption export controls.
- Public frequency 915mHz eligible without license.
- **Remember to constrain frequency**

## 2. Research and Select Protocols

### Mesh Routing Protocols

Study existing mesh protocols like:

- **OLSR (Optimized Link State Routing)**
- **B.A.T.M.A.N. (Better Approach To Mobile Adhoc Networking)**
- **Ad-hoc On-Demand Distance Vector (AODV)**
  - TODO:

### Cryptographic Protocols

Choose appropriate cryptographic methods for encryption and key exchange, such as **AES (Advanced Encryption Standard)**, **RSA**, **Diffie-Hellman**, or **Elliptic Curve Cryptography**.

- AES more than likely for public comms, maybe something like RSA for advanced encryption for conversations?

### Data Integrity and Authentication

Incorporate methods like **HMAC (Hash-Based Message Authentication Code)** or **digital signatures** to ensure data integrity.

- Hash based.

## 3. Design the Network Architecture

### Node Roles and Topology

- Define the roles of nodes (e.g., gateway, relay, end-device) and design the network topology (e.g., star, tree, mesh).
- Mesh

### Multi-Hop Routing

Develop or adapt an algorithm for routing packets across multiple hops, considering path optimization, fault tolerance, and latency.

- Ad-hoc on-demand distance vector is likely best suited. Should basically lazy load the network on request and send routing requests.
- AODV is a reactive routing protocol designed for ad-hoc mobile networks. It establishes routes only when needed, reducing overhead.
- Key Concepts:
  1. Route Discovery: Uses broadcast RREQ (Route Request) packets to find a route.
  2. Route Maintenance: Uses RREP (Route Reply) packets to confirm and maintain routes.
  3. Sequence Numbers: Ensure the freshness of routes and prevent loops.
  4. Applications: Commonly used in wireless sensor networks and MANETs (Mobile Ad-hoc Networks)

- Better Approach To Mobile Ad-hoc Networking (B.A.T.M.A.N.)
- Overview: B.A.T.M.A.N. is a decentralized, proactive routing protocol that focuses on discovering the best path based on link quality rather than shortest distance.
- Key Concepts:
  - Originator Messages: Nodes periodically broadcast originator messages to inform others of their existence.
  - Link Quality Measurement: Nodes calculate the best next hop based on the quality of received messages.
  - Distributed Route Management: No single node has complete route information, reducing the risk of failure.
- Applications: Commonly used in community mesh networks like Freifunk

- ZigBee Routing Protocol
  - Overview: ZigBee is a specification for low-power wireless networks, often used in IoT applications. It includes both mesh and tree routing options.
  - Key Concepts:
    - Tree Routing: Uses a hierarchical structure to route messages, useful in predictable topologies.
    - Mesh Routing: Provides dynamic routing to handle changes in the network.
    - Low Power: Focuses on energy efficiency, making it ideal for battery-operated devices.
  - Applications: Widely used in smart home devices and industrial automation.

### Encryption Scheme

- Should we use end-to-end encryption, hop-by-hop encryption, or a combination, and design the key management system? (centralized, decentralized, or distributed key management)

### Addressing and Identity Management

- Create a unique addressing scheme and identity management protocol to ensure secure and reliable communication between nodes.
- Treat like crypto wallet addresses

## 4. Develop and Test Core Communication Functions

- Basic Radio Communication: Implement and test basic communication between nodes using the chosen hardware and libraries.
- Packet Structure: Design the data packet structure, including headers, payloads, and security fields.
- Encryption Integration: Implement encryption and decryption in the communication stack, ensuring seamless integration with the routing protocol.
- Error Handling and Retransmission: Develop mechanisms for error detection, handling, and packet retransmission.

## 5. Implement Multi-Hop Routing

- Routing Algorithm: Code the routing algorithm, allowing for dynamic route discovery and maintenance.
- Node Discovery and Handshaking: Implement node discovery mechanisms, allowing nodes to find and authenticate each other before communication.
- Path Selection and Optimization: Integrate path selection algorithms that optimize for factors like distance, signal strength, and node availability.

## 6. Test and Validate the Network

- Simulated Environment: Test the network in a simulated environment.
  - TODO: look into **NS-3** or custom simulators.
- Field Testing: Deploy the network in a real-world environment and evaluate performance, range, reliability, and security.
- Stress Testing: Push the network to its limits to test scalability, encryption overhead, and node failure handling.

## 7. Optimize Performance and Security

- Performance Tuning: Optimize the network for speed, power consumption, and latency by refining the routing algorithm, encryption techniques, and packet structure.
- Security Enhancements: Conduct a thorough security audit to identify potential vulnerabilities and improve encryption, key management, and authentication mechanisms.
  - Marauder, DISCO run.
- Resilience and Redundancy: Implement features that enhance network resilience, such as redundancy, fault tolerance, and self-healing capabilities.

## 8. Documentation and Iteration

- Documentation: Document the network architecture, protocols, algorithms, and configuration settings to ensure reproducibility and scalability.
- Open Source Contributions: Consider open-source to gain feedback and collaborate on improvements.
  - **This will depend on funding strategy.**
- Iterative Development: Continue refining the network based on testing results, user feedback, and emerging technologies.

## 9. Deployment and Maintenance

- Deployment Planning: Develop a deployment plan for rolling out the mesh network, including node installation, configuration, and ongoing maintenance.
  - UI/UX
  - Bluetooth integration
- Monitoring and Management: Implement tools and protocols for monitoring network health, performance, and security in real-time.

## 10. Future Enhancements

- Feature Expansion: Explore adding features like QoS (Quality of Service), advanced traffic management, or integration with IoT devices and environment sensors.
- Scalability: Investigate ways to scale the network to support larger areas, more nodes, or higher data rates.
  - Node placement, adoption plan.
- Interoperability: Consider integrating with other networks or communication standards to increase the network's flexibility and reach.
  - Meshtastic and LoRaWAN to possibly piggy back signals for access.
