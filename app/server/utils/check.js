export function checkValidValue(requestFields, req, res){
    const requiredFields = requestFields
        for (const field of requiredFields) {
            if (!req.body[field]) {
                return res.status(400).json({ error: `Поле ${field} обязательно для заполнения.` });
            }
        }
}