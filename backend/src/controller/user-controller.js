import userService from "../service/user-service.js";

// const register = async (req, res, next) => {
//     try {
//         const result = await userService.register(req.body);
//         res.status(200).json({
//             data: result
//         });
//     } catch (error) {
//         next(e);
//     }
// }

const login = async (req, res, next) => {
    try {
        const result = await userService.login(req.body);
        res.status(200).json({
            data: result,
            ok: true
        });
    } catch (error) {
        next(error);
    }
}

const send_email = async (req, res, next) => {
    try {
        const result = await userService.send_email_forgot_pass(req.body);
        res.status(200).json({
            data: result,
            ok: true
        });
    } catch (error) {
        next(error);
    }
}

const send_code = async (req, res, next) => {
    try {
        console.log(req.body)
        const result = await userService.send_code_forgot_pass(req.body);
        res.status(200).json({
            data: result,
            ok: true
        });
    } catch (error) {
        next(error);
    }
}

const send_repass = async (req, res, next) => {
    try {
        console.log(req.body)
        const result = await userService.send_repass_forgot_pass(req.body);
        res.status(200).json({
            data: result,
            ok: true
        });
    } catch (error) {
        next(error);
    }
}

export default{
    login,
    send_email,
    send_code,
    send_repass
}