import React from "react";

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true, error: error };
    }

    componentDidCatch(error, info) {
        console.log(`ErrorBoundary caught an error: ${error}`);
        console.log(`ErrorBoundary info: ${info}`);
    }

    render() {
        if (this.state.hasError) {
            return <h1 className="text-red-600 text-3xl text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">OOPS! Something Went Wrong</h1>
        }
        return this.props.children
    
    }
}

export default ErrorBoundary;