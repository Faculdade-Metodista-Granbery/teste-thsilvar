import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Card, Paragraph } from 'react-native-paper';

// MaterialCommunityIcons
// https://oblador.github.io/react-native-vector-icons/
// https://www.color-hex.com/color-palette/44545

const styles = StyleSheet.create({
    content: {
        backgroundColor: '#c64242',
        padding: 24,
        minHeight: 50,
    },
    actions: {
        backgroundColor: '#f7c2c2',
        justifyContent: 'flex-end',
    },
    quote: {
        fontSize: 52,
        fontWeight: 'bold',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8,
        lineHeight: 64
    }
});

const CardQuote = ({ quote }) => {
    return (
        <Card>
            <Card.Content style={styles.content}>
                <Paragraph style={styles.quote}>{quote}</Paragraph>
            </Card.Content>
            <Card.Actions style={styles.actions}>
                <Button 
                icon="share-variant" 
                color='#541616'
                labelStyle={{ fontSize: 24 }}
                />
                <Button 
                icon="star-outline" 
                color='#541616'
                labelStyle={{ fontSize: 24 }}
                />
            </Card.Actions>
        </Card>
    )
}

export default CardQuote;