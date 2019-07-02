module.exports = (sequelize, DataTypes) => 
    // const User = 
    sequelize.define('Songs', {
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        artist: DataTypes.STRING,
        genre: DataTypes.STRING,
        album: DataTypes.STRING,
        albumImageUrl: DataTypes.STRING,
        youtubeId: DataTypes.STRING,
        lyrics: DataTypes.TEXT,
        tab: DataTypes.TEXT
        }
    )