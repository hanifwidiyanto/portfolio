import Head from 'next/head';

function SEO({ title, description, keywords, robots, canonical, ogImage, ogTitle, ogDescription }) {
    return (
        <Head>
            {/* Title */}
            <title>{title}</title>

            {/* Description */}
            {description && <meta name="description" content={description} />}

            {/* Keywords */}
            {keywords && <meta name="keywords" content={keywords} />}

            {/* Robots */}
            {robots && <meta name="robots" content={robots} />}

            {/* Canonical */}
            {canonical && <link rel="canonical" href={canonical} />}

            {/* Open Graph */}
            {ogImage && <meta property="og:image" content={ogImage} />}
            {ogTitle && <meta property="og:title" content={ogTitle} />}
            {ogDescription && <meta property="og:description" content={ogDescription} />}
        </Head>
    );
}

export default SEO;
