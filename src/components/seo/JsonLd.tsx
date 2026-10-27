type JsonLdProps = Readonly<{
  data: object;
}>;

export function JsonLd({ data }: JsonLdProps) {
  // Escaping "<" keeps a string inside the data from closing the script element.
  const json = JSON.stringify(data).replaceAll("<", String.raw`<`);

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />;
}
