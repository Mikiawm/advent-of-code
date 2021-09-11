#lang racket

(define p1 (call-with-input-file "input.txt"
             (lambda (port)
               (let ([result 0]) 
                 (for ([l (in-lines port)])
                   (let ([x (map (lambda (item)(string->number item)) (string-split l "x"))])
                     (set! result (+ result
                                     (+
                                      (* 2 (first x) (second x))
                                      (* 2 (second x) (third x))
                                      (* 2 (third x) (first x)))
                                     (let ([y (sort x <)]) (* (first y) (second y))) 
                                     )
                           )
                     )
                   )
                 (display result)
                 )

               )
             )
  )

(define p2 (call-with-input-file "input.txt"
             (lambda (port)
               (let ([result 0]) 
                 (for ([l (in-lines port)])
                   (let ([x (map (lambda (item)(string->number item)) (string-split l "x"))])
                     (set! result (+ result
                                     (+
                                      (* (first x)
                                         (second x)
                                         (third x))
                                      (let ([y (sort x <)]) (+ (* 2 (first y)) (* 2 (second y)) )) 
                                      )))))
                 (display result)
                 )
               )
             )
  )