import React, { Component } from 'react';
import{ Text, View, StyleSheet, TextInput } from 'react-native';
import { Button } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';

class Search extends Component{
    constructor(props){
        super(props);
        this.state={
            term:'',
        }
    }

    render(){
        return(
            <View style={styles.container}>
                <View style={{flex:85}}>
                    <TextInput
                            underlineColorAndroid='transparent'
                            style={styles.textInput}
                            placeholder='Nhập nội dung tìm kiếm'
                            placeholderTextColor='#AAAAAA'
                            onChangeText={term=>this.setState({term})}
                            value={this.state.term}
                            autoCorrect={false}
                            returnKeyType='search'
                            onSubmitEditing={()=>{ this.props.onPressSearch(this.state.term)
                                                this.setState({term:''})
                                            }}
                            clearTextOnFocus={true}
                            autoFocus={true}
                            onEndEditing={this.clearTextOnFocus}
                            >
                    </TextInput>
                </View>
                <View style={{flex:15}}>
                    <Button style={styles.button} onPress={()=>{
                        this.props.onPressSearch(this.state.term)
                        this.setState({term:''})
                        }}>
                        <Icon style={{marginRight:5}} name='ios-search-outline' size={45} color='white'/>
                    </Button>
                </View>
            </View>
        );
    }
}

const styles=StyleSheet.create({
    container:{
        flexDirection:'row',
        margin:2
    },
    textInput:{
        flex:1,
        backgroundColor:'#CCCCCC',
        borderRadius:22,
    },
    button:{
        backgroundColor:'#CCCCCC',
        marginLeft:3,
        borderRadius:50,
        paddingLeft:5,
        paddingRight:5,
    }
})

export default Search;
