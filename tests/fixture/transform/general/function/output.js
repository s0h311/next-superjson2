import { withSuperJSONPage as _withSuperJSONPage } from "next-superjson-plugin/tools";
import { withSuperJSONProps as _withSuperJSONProps } from "next-superjson-plugin/tools";
export const getServerSideProps = _withSuperJSONProps(async function() {}, [
    "smth"
]);
function Page() {
    return <></>;
}
export default _withSuperJSONPage(Page);
