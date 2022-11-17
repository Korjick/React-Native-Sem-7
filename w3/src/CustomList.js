import {ScrollView, StyleSheet} from "react-native";

export const CustomList = (props) => {
    const styles = StyleSheet.create({
        scrollView: {
            backgroundColor: props.backColor,
            paddingRight: 5,
            paddingLeft: 5,
            paddingTop: 10
        }
    });

    return (
        <ScrollView style={styles.scrollView}>
            {renderViews(props.innerViewAction, props.innerCount)}
        </ScrollView>
    )
}

function renderViews(action, count) {
    let payments = [];
    for (let i = 0; i < count; i++)
        payments.push(action(i))
    return payments;
}
