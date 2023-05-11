const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.createUser = async (req, res) => {
    try {
        console.log(req.body);
        const userExist = await User.findOne({ userMail: req.body.userMail })
        if (userExist) {
            res.send({
                "baslik": "Başarısız!",
                "mesaj": `Kullanıcı, ${userExist.userMail} adresi ile zaten var!`
            });
            return;
        }
        const user = await User.create(req.body);
        res.status(201).json({
            "baslik": "Başarılı!", "mesaj": 'Kullanıcı başarıyla oluşturuldu!',
            "user": {
                "userName": user.userName,
                "userMail": user.userMail
            }
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            "baslik": "Hata!",
            "mesaj": "Sunucu hatası"
        });
    }
};