import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Card, Paragraph } from 'react-native-paper';

// MaterialCommunityIcons
// https://oblador.github.io/react-native-vector-icons/
// https://www.color-hex.com/color-palette/44545

const styles = StyleSheet.create({
    content: {
        flex: 1,
        backgroundColor: '#c64242',
        padding: 24,
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
        lineHeight: '120%'
    }
});

const CardQuote = ({ quote }) => {
    return (
        <Card >
            <Card.Content style={styles.content}>
                <Paragraph style={styles.quote}>{quote}</Paragraph>
            </Card.Content>
            <Card.Actions style={styles.actions}>
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