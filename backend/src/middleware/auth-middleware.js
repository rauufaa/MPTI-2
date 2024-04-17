import { databaseQuery } from "../application/database.js"
export const authMiddleware = async (req, res, next) => {
    const token = req.get('Authorization');
    const username = req.body.username;
    if (!token) {
        res.status(401).json({
            errors: "Unauthorized"
        }).end();
    } else {
        let query = "SELECT username, token FROM users WHERE username=? AND token=?"
        let params = [username, token]
        let [user, fields] = await databaseQuery(query, params)

        if(user.length === 0){
            // throw new ResponseError(400, "User not found")
            res.status(401).json({
                errors: "Unauthorized"
            }).end();
        }else {
            req.user = user.at(0);
            next();
        }

        // if (!user) {
        //     res.status(401).json({
        //         errors: "Unauthorized"
        //     }).end();
        // } else {
        //     req.user = user;
        //     next();
        // }
    }
}