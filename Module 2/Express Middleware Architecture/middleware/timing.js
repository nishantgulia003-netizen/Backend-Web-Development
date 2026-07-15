function timing(req, res, next) {

    const start = Date.now();

    res.on("finish", () => {

        const time = Date.now() - start;

        let id = "";

        if (req.id) {
            id = `[${req.id.substring(0, 8)}] `;
        }

        console.log(`${id}${req.method} ${req.path} took ${time}ms`);
    });

    next();
}

module.exports = timing;