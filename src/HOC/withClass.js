import React, {Component} from "react";

const withClass = (Component, className) => {
    return props => {
        return  (
            <section className={className}>
                <Component {...props}/>
            </section>
        )
    }
}

export default withClass