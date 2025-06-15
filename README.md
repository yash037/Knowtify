# Knowtify

Knowtify is a web app tailored for college environments, enabling college staff, seniors, and batch-mates to post notifications and posts for various activities. The platform includes a low latency chat facility, upvoting system for posts, and a discussion section under each user post.

## Features
- **Notification/Posts**: College staff, seniors, and batch-mates can post notifications or posts for various activities.
- **Chat Facility**: Low latency chat between users on the platform using Socket.io.
- **Upvoting System**: Users can upvote a post, which increases the weight of different posts.
- **Discussion Section**: Supports discussions under user posts where viewers can ask questions and engage further.

## Tech Stack
- **Frontend**: React.js, Chakra UI, Socket.io
- **Backend**: Node.js, Express.js, JWT Authentication
- **Database and Cloud Storage**: MongoDB, Cloudinary

## Installation and Setup

### Prerequisites
- Node.js
- npm (Node Package Manager)
- MongoDB account
- Cloudinary account

### Steps to run the project

1. **Clone the repository:**
    ```sh
    git clone https://github.com/yash037/Knowtify.git
    cd knowtify
    ```

2. **Install dependencies for both frontend and backend:**
    ```sh
    cd backend
    npm install
    cd ../notifPanel
    npm install
    ```

3. **Build the project:**
    ```sh
    cd backend
    npm run build
    cd ../notifPanel
    npm run build
    ```

4. **Add `.env` file in the `backend` folder with the following format:**
    ```env
    PORT=
    MONGO_URI=
    JWT_SECRET=
    CLOUDINARY_CLOUD_NAME=
    CLOUDINARY_API_KEY=
    CLOUDINARY_API_SECRET=
    ```

5. **Start the development server:**
    ```sh
    cd backend
    npm start
    cd ../notifPanel
    npm start
    ```


## Usage
After completing the setup, you can start using Knowtify. College staff, seniors, and batch-mates can post notifications and interact with each other through the chat facility. Users can upvote posts to increase their visibility and engage in discussions under each post.

<!--
## Contributing
Feel free to fork the repository and make changes. Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
-->

## Contributors
- [Yash Sharma](https://github.com/yash037)
- [Jagmohan Sharma](https://github.com/jaggi037)

## Acknowledgments
- Special thanks to the developers and maintainers of the libraries and tools used in this project.

