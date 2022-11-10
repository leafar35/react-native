import React, { Component } from "react";

import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

export default class List extends Component {

    constructor(props){
        super(props);
        this.state = {
            feed: this.props.data
        }
        this.showLikes = this.showLikes.bind(this);
        this.like = this.like.bind(this);
        this.loadIcon = this.loadIcon.bind(this);
    }

    loadIcon(likeada){
        return likeada ? require('../../img/likeada.png') : require('../../img/like.png');
    }

    like(){
        let feed = this.state.feed;
        if(feed.likeada){
            return this.setState({
                feed: {
                    ...feed,
                    likeada: false,
                    likers: feed.likers - 1,
                }
            });
        }
        this.setState({
            feed: {
                ...feed,
                likeada: true,
                likers: feed.likers + 1,
            }
        });
    }

    showLikes(likers){
        let feed = this.state.feed;
        if(feed.likers <= 0){
            return;
        }
        return (
            <Text style={style.likers}>
                {feed.likers} {feed.likers > 1 ? 'curtidas' : 'curtida'}
            </Text>
        )
    }

    render(){
        return (
            <View style={style.areaFeed}>

                <View style={style.viewProfile}>
                    <Image
                        source={{uri: this.state.feed.imgprofile}}
                        style={style.photoProfile}
                    />
                    
                    <Text style={style.nameUser}>{this.state.feed.name}</Text>

                </View>

                <Image
                    resizeMode="cover" 
                    style={style.photoPost}
                    source={{uri: this.state.feed.imgPost}} 
                />

                <View style={style.areaBtn}>
                    <TouchableOpacity onPress={this.like}>
                        <Image 
                            source={this.loadIcon(this.state.feed.likeada)}
                            style={style.iconlike}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={style.btnsend}>
                        <Image 
                            source={require('../../img/send.png')}
                            style={style.iconlike}
                        />
                    </TouchableOpacity>
                </View>

                {this.showLikes(this.state.feed.likers)}

                <View style={style.viewfooter}>
                    <Text style={style.namefooter}>
                        {this.state.feed.name}
                    </Text>
                    <Text style={style.descfooter}>
                        {this.state.feed.description}
                    </Text>
                </View>

            </View>
        )
    }

}

const style = StyleSheet.create({
    areaFeed:{

    },
    nameUser: {
        fontSize: 22,
        textAlign: 'left',
        color: '#000000',
    },
    viewProfile: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        padding: 8,
    },
    photoProfile: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    photoPost: {
        flex: 1,
        height: 400,
        alignItems: 'center',
    },
    areaBtn:{
        flexDirection: 'row',
        padding: 5
    },
    iconlike: {
        width: 33,
        height: 33,
    },
    btnsend: {
        paddingLeft: 5,
    },
    viewfooter:{
        flexDirection: 'row',
        alignItems: 'center',
    },
    descfooter: {
        paddingLeft: 5,
        fontSize: 15,
        color: '#000',
    },
    namefooter: {
        fontSize: 18,
        color: '#000',
        paddingLeft: 5,
        fontWeight: 'bold'
    },
    likers: {
        fontWeight: 'bold',
        marginLeft: 5,
    }
});
