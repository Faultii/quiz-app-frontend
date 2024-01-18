export const FactComponent = ({factData}) => {
    <>
    <h1>{factData.factTitle}</h1>
    <div>{factData.userId}</div>
    <div>{factData.fact}</div>
    </>
}