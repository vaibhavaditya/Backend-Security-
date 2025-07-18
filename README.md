# 🔐 Node.js Cryptography Playground

This project demonstrates core cryptographic concepts in Node.js, including both **symmetric** and **asymmetric encryption**, **hashing with salting**, and **secure key exchange** using Diffie-Hellman and Elliptic Curve Cryptography (ECDH).

## 📦 Features

- **Hashing**:
  - Uses SHA-256 and scrypt with salt for secure password storage.
  
- **Symmetric Encryption**:
  - Uses AES-256-CBC with shared secret keys derived from Diffie-Hellman.
  
- **Asymmetric Encryption**:
  - Demonstrates how public-private key pairs are used in ECDH.
  
- **Key Exchange**:
  - Implements both classic Diffie-Hellman and Elliptic Curve Diffie-Hellman (ECDH) for generating shared secrets between two parties (Alice & Bob).

## 🔧 Technologies Used

- `Node.js`
- `crypto` module
- `AES-256-CBC`
- `SHA-256`, `scrypt`
- `Diffie-Hellman` (DH)
- `Elliptic Curve DH` (`secp256k1`)

## 🚀 How to Run

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
node index.js
