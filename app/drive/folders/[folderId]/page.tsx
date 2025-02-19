/** @format */

export default async function Page({
    params,
}: {
    params: { folderId: string };
}) {
    return <h1>Folder: {params.folderId}</h1>;
}
