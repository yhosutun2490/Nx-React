/* eslint-disable jsx-a11y/accessible-emoji */
import { useRef, useState } from 'react';
import { ScrollView ,View, Text, StatusBar, StyleSheet, Image } from 'react-native';
import { text } from 'stream/consumers';

const App = () => {
  const [whatsNextYCoord, setWhatsNextYCoord] = useState<number>(0);

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ gap:10, padding: 20 , justifyContent: 'center', alignItems: 'center'}}
    >
      <StatusBar barStyle="dark-content" />
      <Text id="header" style={styles.text}>Hello My First App</Text>
      <Image
        source={{ uri: 'https://picsum.photos/300' }}
        style={{ width: 300, height: 300 }}
      />
      <Text>
        Contrary to popular belief, Lorem Ipsum is not simply random text. It
        has roots in a piece of classical Latin literature from 45 BC, making it
        over 2000 years old. Richard McClintock, a Latin professor at
        Hampden-Sydney College in Virginia, looked up one of the more obscure
        Latin words, consectetur, from a Lorem Ipsum passage, and going through
        the cites of the word in classical literature, discovered the
        undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33
        of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by
        Cicero, written in 45 BC. This book is a treatise on the theory of
        ethics, very popular during the Renaissance. The first line of Lorem
        Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section
        1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is
        reproduced below for those interested. Sections 1.10.32 and 1.10.33 from
        "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their
        exact original form, accompanied by English versions from the 1914
        translation by H. Rackham.
      </Text>
      <Text>
        Where can I get some? There are many variations of passages of Lorem
        Ipsum available, but the majority have suffered alteration in some form,
        by injected humour, or randomised words which don't look even slightly
        believable. If you are going to use a passage of Lorem Ipsum, you need
        to be sure there isn't anything embarrassing hidden in the middle of
        text. All the Lorem Ipsum generators on the Internet tend to repeat
        predefined chunks as necessary, making this the first true generator on
        the Internet. It uses a dictionary of over 200 Latin words, combined
        with a handful of model sentence structures, to generate Lorem Ipsum
        which looks reasonable. The generated Lorem Ipsum is therefore always
        free from repetition, injected humour, or non-characteristic words etc.
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'plum',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    color: 'white',
  },
});
export default App;