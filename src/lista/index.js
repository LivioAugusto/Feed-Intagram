import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'

export default class Lista extends Component {

    constructor(props) {
        super(props);
        this.state = {
            feed: this.props.data
        };

        this.mostraLikes = this.mostraLikes.bind(this);
        this.like = this.like.bind(this);
        this.carregaIcone = this.carregaIcone.bind(this);
    }

    mostraLikes(likers) {
        let feed = this.state.feed;

        if (feed.likers <= 0) {
            return;
        }
        return (
            <Text style={styles.likes}>
                {feed.likers} {feed.likers > 1 ? 'curtidas' : 'curtida'}
            </Text>
        )
    }

    like() {
        let feed = this.state.feed;

        if (feed.likeada === true) {
            this.setState({
                feed: {
                    ...feed,
                    likeada: false,
                    likers: feed.likers - 1,
                }
            })
        } else {
            this.setState({
                feed: {
                    ...feed,
                    likeada: true,
                    likers: feed.likers + 1
                }
            })
        }
    }

    carregaIcone(likeada) {
        return likeada ? require('../img/likeada.png') : require('../img/like.png')
    }

    render() {
        return (
            <View style={styles.feed}>
                <View style={styles.viewPerfil}>
                    <Image
                        source={{ uri: this.state.feed.imgperfil }}
                        style={styles.fotoPerfil}
                    />

                    <Text style={styles.nomeUser}> {this.state.feed.nome}</Text>
                </View>

                <Image
                    resizeMode="cover"
                    source={{ uri: this.state.feed.imgPublicacao }}
                    style={styles.imgPub}
                />

                <View style={styles.areaBtn}>
                    <TouchableOpacity onPress={this.like}>
                        <Image
                            source={this.carregaIcone(this.state.feed.likeada)}
                            style={styles.iconeLike}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btnSend}>
                        <Image
                            source={require('../img/send.png')}
                            style={styles.iconeLike}
                        />
                    </TouchableOpacity>
                </View>

                {
                    this.mostraLikes(this.state.feed.likers)
                }

                <View style={styles.viewRodape}  >
                    <Text style={styles.nomeRodade}>
                        {this.state.feed.nome}
                    </Text>

                    <Text style={styles.descRodade}>
                        {this.state.feed.descricao}
                    </Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    feed: {
        flex: 1
    },

    nomeUser: {
        fontSize: 22,
        textAlign: 'left',
        color: '#000',

    },

    fotoPerfil: {
        width: 50,
        height: 50,
        borderRadius: 25
    },

    viewPerfil: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        padding: 8
    },
    imgPub: {
        flex: 1,
        height: 400,
        alignItems: 'center'
    },

    areaBtn: {
        flexDirection: 'row',
        padding: 5,
    },

    iconeLike: {
        width: 33,
        height: 33,

    },

    btnSend: {
        paddingLeft: 5
    },

    viewRodape: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    descRodade: {
        paddingLeft: 5,
        fontSize: 16,
        color: '#000'
    },
    nomeRodade: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
        paddingLeft: 5
    },
    likes: {
        fontWeight: 'bold',
        marginLeft: 5
    }
})
