export const useUtils = () => {
    const sayHello = () => console.log("Hello"); 
    const sayGB = () => console.log("Good Bye");
        return {
        sayHello,
        sayGB,
    }
}