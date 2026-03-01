'use client';

import { useSearchParams } from 'next/navigation';
import {
  Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious} from "@/components/ui/pagination";

export function PaginationMagasins({ totalPages }: { totalPages: number }) {
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get('page')) || 1;

  return (
    <div className='m-3'>
    <Pagination>
          <PaginationContent>
              {/* Bouton Précédent */}
              <PaginationItem>
                  <PaginationPrevious
                      href={currentPage > 1 ? `?page=${currentPage - 1}` : '#'}
                      aria-disabled={currentPage <= 1} />
              </PaginationItem>

              {/* Numéros de page */}
              {[...Array(totalPages)].map((_, i) => (
                  <PaginationItem key={i + 1}>
                      <PaginationLink
                          href={`?page=${i + 1}`}
                          isActive={currentPage === i + 1}
                      >
                          {i + 1}
                      </PaginationLink>
                  </PaginationItem>
              ))}

              {/* Bouton Suivant */}
              <PaginationItem>
                  <PaginationNext
                      href={currentPage < totalPages ? `?page=${currentPage + 1}` : '#'}
                      aria-disabled={currentPage >= totalPages} />
              </PaginationItem>
          </PaginationContent>
      </Pagination>
   </div>
  );
}
