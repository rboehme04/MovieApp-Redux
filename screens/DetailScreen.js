import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  Modal,
} from "react-native";

export default class Info extends React.Component {

  state = {
    modalVisible: false,
    inFavourites: false,
  }

  componentDidMount() {
    this.setState({
      inFavourites: this.isInFavourites(this.props.route.params.movie)
    })
  }

  isInFavourites = (movie) => {
    for (var i = 0; i < this.props.favouriteMovies.length; i++) {
      if (this.props.favouriteMovies[i].id === movie.id)
        return true
    }
    return false
  }

  handleImagePress = () => {
    this.setState({modalVisible: true});
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <TouchableOpacity
          style={styles.imageContainer}
          onPress={this.handleImagePress}
        >
          <Image
            style={styles.picture}
            source={{
              uri: this.props.route.params.movie.poster,
            }}
          />
        </TouchableOpacity>
        <View style={styles.detailContainer}>
          <Text style={styles.textHeading}>
            {this.props.route.params.movie.title}
          </Text>
          <Text style={styles.text}>{this.props.route.params.movie.year}</Text>
          <TouchableOpacity 
            style={[styles.btnWatchlist, this.state.inFavourites ? styles.btnRemove : styles.btnAdd]}
            onPress={() => {
              if (this.state.inFavourites) {
                this.props.updateWatchlist(this.props.route.params.movie, 'remove')
                this.setState({inFavourites: false})
              } else {
                this.props.updateWatchlist(this.props.route.params.movie, 'add')
                this.setState({inFavourites: true})
              }
            }}
          >
            <Text style={this.state.inFavourites ? styles.btnRemoveText : styles.btnAddText}>{this.state.inFavourites ? 'Remove from Watchlist' : 'Add to Watchlist'}</Text>
          </TouchableOpacity>
          <Text style={[styles.text, styles.center, styles.rating]}>
            {this.props.route.params.movie.rating} / 10
          </Text>
          <Text style={[styles.text, styles.padding5]}>
            Description:
          </Text>
          <Text style={[styles.text, styles.padding5]}>
            {this.props.route.params.movie.description}
          </Text>
        </View>
        <Modal
          visible={this.state.modalVisible}f
          transparent={true}
          onRequestClose={() => this.setState({modalVisible: false})}
        >
          <View style={styles.modalContainer}>
            <Image
              style={styles.modalImage}
              source={{ uri: this.props.route.params.movie.poster }}
            />
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => this.setState({modalVisible: false})}
            >
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
  },
  imageContainer: {
    flex: 1,
  },
  detailContainer: {
    flex: 2,
    margin: 7,
  },

  textHeading: {
    fontWeight: "bold",
    fontSize: 22,
  },
  text: {
    fontSize: 14,
  },
  center: {
    textAlign: "center",
  },
  padding5: {
    padding: 5,
  },
  rating: {
    margin: 5,
    fontSize: 20,
  },
  picture: {
    flex: 1,
    height: 200,
  },

  btnWatchlist: {
    marginTop: 5,
    marginBottom: 5,
    padding: 7,
    borderRadius: 4,
  },
  btnAdd: {
    backgroundColor: "#0096f8",
    borderWidth: 1,
    borderColor: "#0096f8",
  },
  btnRemove: {
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#0096f8",
  },
  btnAddText: {
    color: "white",
    textAlign: "center",
  },
  btnRemoveText: {
    color: "#0096f8",
    textAlign: "center",
  },

  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
  },
  modalImage: {
    resizeMode: "contain",
    height: 500,
    width: 500,
    borderRadius: 10,
  },
  closeButton: {
    marginTop: 10,
    padding: 10,
    backgroundColor: "black",
    borderRadius: 5,
  },
  closeButtonText: {
    fontSize: 16,
    color: "lightgrey",
    fontWeight: "bold",
    textAlign: "center",
  },
});