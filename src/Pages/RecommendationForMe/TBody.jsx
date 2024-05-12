/* eslint-disable react/prop-types */


const TBody = ({rm}) => {
    return (
        <tbody>
            <tr className="border-b border-opacity-20 dark:border-gray-300">
                <td className="p-3">
                    <p>{rm?.productNameForRecommend}</p>
                </td>
                <td className="p-3">
                    <p>{rm?.recommendedProductName}</p>
                </td>
                <td className="p-3">
                    <p>{rm?.recommendationTitle}</p>
                </td>
                <td className="p-3">
                    <p>{rm?.date}</p>
                </td>
                <td className="p-3">
                    <p>{rm?.recommenderEmail}</p>
                </td>
            </tr>
        </tbody>
    );
};

export default TBody;