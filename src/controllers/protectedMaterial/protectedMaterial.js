const protectedMaterialController = (_, res) => {
    res.json({message: 'Ya puedes ver la información!!'})
}

module.exports = protectedMaterialController;