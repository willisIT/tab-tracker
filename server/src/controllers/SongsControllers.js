const {Songs} = require('../models')
const Squelize = require('sequelize')

module.exports = {
    async index (req, res){
        try{
            let songs = null;
            const search = req.query.search
            const op = Squelize.Op
            console.log(search);
            
            if (search) {
                songs = await Songs.findAll({
                    where: {
                        [op.or]: [
                            'title', 'artist', 'genre', 'album'
                        ].map(key => ({
                            [key]: {
                                [op.like]: `%${search}%`
                            }
                        }))
                    }
                })
            } else {
                songs = await Songs.findAll()
            }
            res.status(200).json(songs)
            
        }
        catch (err) {
            console.log(err)
            res.status(500).json({
                error: 'an error has occured trying to fetch the songs',
            })
        }
    },
    async post (req, res) {
        try{
            const song = await Songs.create(req.body)
            res.status(201).json(song)
        }
        catch (err) {
            console.log(err)
            res.status(500).json({
                error: 'an error has occured trying to create the song',
            })
        }
    },
    async show (req, res) {
        try{
            const song = await Songs.findByPk(req.params.songId)
            res.status(201).json(song)
        }
        catch (err) {
            console.log(err)
            res.status(500).json({
                error: 'an error has occured trying to create the song',
            })
        }
    },
    async update (req, res) {
        try{
            const song = await Songs.update(req.body, {
                where: {id: req.params.songId}
            })
            res.status(201).json(song)
        }
        catch (err) {
            console.log(err)
            res.status(500).json({
                error: 'an error has occured trying to update the song',
            })
        }
    }
}