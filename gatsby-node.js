const path = require('path')

// module.exports.onCreateNode = ({node, actions}) =>{
//     const{createNodeField} = actions

//     if(node.internal.type === "MarkdownRemark")
//     {
//         const slug = path.basename(node.fileAbsolutePath, '.md')
        
//         createNodeField({
//             node,
//             name:'slug',
//             value: slug
//         })
//     }
// }

module.exports.createPages = async ({graphql, actions}) =>{
    const { createPage } = actions
    
    const blogTemplate = path.resolve('./src/templates/blog.js')  

    // const res = await graphql(`
    //     query
    //     {
    //         allMarkdownRemark{
    //                 edges{
    //                     node{
    //                         fields{
    //                             slug
    //                         }
    //                     }
    //                 }
    //         }
    //     }
    // `)
    const res = await graphql(`
    query
    {
        allContentfulBlogPost{
            edges{
                node{
                    slug
                }
            }
        }
    }
`)
res.data.allContentfulBlogPost.edges.forEach((edge) =>{
    createPage({
        path: `/blog/${edge.node.slug}`,
        component: blogTemplate,         
        context: {
            slug: edge.node.slug 
        }
    })
})
    // res.data.allMarkdownRemark.edges.forEach((edge) =>{
    //     createPage({
    //         path: `/blog/${edge.node.fields.slug}`,
    //         component: blogTemplate,         
    //         context: {
    //             slug: edge.node.fields.slug 
    //         }
    //     })
    // })
}