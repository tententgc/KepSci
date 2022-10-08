import { newSession } from '../../../packages/backend/mongo/connection';

const apiNewSession = async (username, email, password) => {
    await newSession(username, email,password);
};

export default apiNewSession();