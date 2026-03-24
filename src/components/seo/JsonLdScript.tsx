type JsonLdScriptProps = Readonly<{
  data: unknown;
  id?: string;
}>;

export default function JsonLdScript({ data, id }: JsonLdScriptProps) {
  const serializedJson = JSON.stringify(data).replaceAll("<", String.raw`\u003c`);

  return (
    <script
      id={id}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: serializedJson }}
    />
  );
}
