'use client';
import { TableData } from '@/model';

export default function Home() {
  const datastructure: TableData[] = [
    {
      club: 'GC Buchholz',
      spieltag1: 51,
      spieltag2: 49,
      spieltag3: 68,
      spieltag4: 67,
      spieltag5: 49,
    },
    {
      club: 'GC Wendlohe',
      spieltag1: 51,
      spieltag2: 49,
      spieltag3: 68,
      spieltag4: 67,
      spieltag5: 49,
    },
    {
      club: 'GC HH-Holm',
      spieltag1: 51,
      spieltag2: 49,
      spieltag3: 68,
      spieltag4: 67,
      spieltag5: 49,
    },
    {
      club: 'GC Förde-Glücksburg',
      spieltag1: 51,
      spieltag2: 49,
      spieltag3: 68,
      spieltag4: 67,
      spieltag5: 49,
    },
    {
      club: 'GC Lohersand',
      spieltag1: 51,
      spieltag2: 49,
      spieltag3: 68,
      spieltag4: 67,
      spieltag5: 49,
    },
  ];

  return (
    <div className="ge-container flex flex-col justify-center">
      <h1 className="mb-4 text-4xl font-bold">Overview</h1>

      <section id="clubperformance" className="flex gap-x-4">
        <div>
          <h3>Clubperformance</h3>
          <table className="border-collapse border">
            <thead className="">
              <tr className="">
                <th className="border px-4 py-2">Club</th>
                {datastructure.map((data) => (
                  <th key={data.club} className="border px-4 py-2">
                    {data.club}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="[&>*:nth-child(even)]:bg-gray-300 [&>*:nth-child(odd)]:bg-white">
              <tr>
                <td className="border-collapse border px-4 py-2">Spieltag 1</td>
                {datastructure.map((data) => (
                  <td key={data.spieltag1} className="border px-4 py-2">
                    {data.spieltag1}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="border-collapse border px-4 py-2">Spieltag 2</td>
                {datastructure.map((data) => (
                  <td key={data.spieltag2} className="border px-4 py-2">
                    {data.spieltag2}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="border-collapse border px-4 py-2">Spieltag 3</td>
                {datastructure.map((data) => (
                  <td key={data.spieltag3} className="border px-4 py-2">
                    {data.spieltag3}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="border-collapse border px-4 py-2">Spieltag 4</td>
                {datastructure.map((data) => (
                  <td key={data.spieltag4} className="border px-4 py-2">
                    {data.spieltag4}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="border-collapse border px-4 py-2">Spieltag 5</td>
                {datastructure.map((data) => (
                  <td key={data.spieltag5} className="border px-4 py-2">
                    {data.spieltag5}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="border-collapse border px-4 py-2">Ergebnis</td>
                <td className="border-collapse border px-4 py-2">Ergebnis</td>
                <td className="border-collapse border px-4 py-2">Ergebnis</td>
                <td className="border-collapse border px-4 py-2">Ergebnis</td>
                <td className="border-collapse border px-4 py-2">Ergebnis</td>
                <td className="border-collapse border px-4 py-2">Ergebnis</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <h3>Spieltage Einzel und Vierer</h3>
          <table className="border-collapse border">
            <thead className="">
              <tr className="">
                <th className="border px-4 py-2">Club</th>
                {datastructure.map((data) => (
                  <th key={data.club} className="border px-4 py-2">
                    {data.club}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="[&>*:nth-child(even)]:bg-gray-300 [&>*:nth-child(odd)]:bg-white">
              <tr>
                <td className="border-collapse border px-4 py-2">Spieltag 1</td>
                {datastructure.map((data) => (
                  <td key={data.spieltag1} className="border px-4 py-2">
                    {data.spieltag1}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="border-collapse border px-4 py-2">Spieltag 2</td>
                {datastructure.map((data) => (
                  <td key={data.spieltag2} className="border px-4 py-2">
                    {data.spieltag2}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="border-collapse border px-4 py-2">Spieltag 3</td>
                {datastructure.map((data) => (
                  <td key={data.spieltag3} className="border px-4 py-2">
                    {data.spieltag3}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="border-collapse border px-4 py-2">Spieltag 4</td>
                {datastructure.map((data) => (
                  <td key={data.spieltag4} className="border px-4 py-2">
                    {data.spieltag4}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="border-collapse border px-4 py-2">Spieltag 5</td>
                {datastructure.map((data) => (
                  <td key={data.spieltag5} className="border px-4 py-2">
                    {data.spieltag5}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="border-collapse border px-4 py-2">Ergebnis</td>
                <td className="border-collapse border px-4 py-2">Ergebnis</td>
                <td className="border-collapse border px-4 py-2">Ergebnis</td>
                <td className="border-collapse border px-4 py-2">Ergebnis</td>
                <td className="border-collapse border px-4 py-2">Ergebnis</td>
                <td className="border-collapse border px-4 py-2">Ergebnis</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <section id="soloperformance">
        <h2>Soloperformance</h2>
      </section>
    </div>
  );
}
