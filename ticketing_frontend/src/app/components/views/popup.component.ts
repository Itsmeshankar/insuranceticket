import { Component } from '@angular/core';

@Component({
  selector: 'app-popup',
  template: `
    <CDBBtn (click)="modal1.toggleModal()" color="dark">
    Modal
</CDBBtn>
<CDBModal #modal1="cdbModal" [centered]=true>
    <CDBCard>
        <CDBCardImage class="img-fluid" src="/assets/img/modal.jpg"></CDBCardImage>
        <CDBCardBody>
            <CDBCardTitle>Title</CDBCardTitle>
            <CDBCardText>
                Proin ut dui sed metus pharetra hend rerit vel non mi. Nulla
                orcane faucibus ex, non facilisis nisl. Maexenas aliquet
                mauris ut tempus. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur iste
                officiis porro hic corrupti laborum voluptatem ratione exercitationem voluptates amet accusamus
                accusantium rerum consequuntur deserunt vero eius, ipsa repellat. Voluptate explicabo deleniti
                laudantium accusantium minima laborum voluptatibus ipsam sapiente quo! Aliquid aspernatur
                facilis quos recusandae eius porro expedita minima molestias, eaque nobis omnis unde sint, alias
                ipsa dicta non voluptatibus doloremque quod ad cumque, consequatur soluta. Vitae soluta
                doloribus cumque iste nesciunt. Veniam eum deserunt placeat veritatis, aspernatur aperiam amet
                exercitationem fugiat ullam voluptatem nostrum rem impedit doloremque magni voluptate sunt
                asperiores aliquam excepturi unde ipsam possimus! Optio sapiente aut et blanditiis repellendus
                nulla numquam voluptatem excepturi, consequuntur pariatur. Quo suscipit harum magnam excepturi
                magni nulla, quasi eos iste. Laboriosam quisquam eaque omnis inventore at obcaecati nemo
                possimus animi asperiores ducimus, fugiat velit, hic, molestiae numquam. Repellendus, cumque!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut adipisci blanditiis obcaecati
                temporibus dolorum dignissimos officia perferendis id quis ratione delectus pariatur odio
                repudiandae alias modi, vitae voluptatem fugiat beatae neque accusamus corrupti! A vero optio
                totam suscipit. Delectus quaerat repellat dolores adipisci earum a at cumque cupiditate sit
                eaque.
            </CDBCardText>
            <div class="d-flex">
                <div class="d-flex justify-content-start" style="flex: 50%">
                    <CDBBtn color="light" [flat]=true>
                        Label
                    </CDBBtn>
                </div>
                <div class="d-flex justify-content-end" style="flex: 50%">
                    <CDBBtn color="white" [flat]=true (click)="modal1.toggleModal()">
                        Cancel
                    </CDBBtn>
                    <CDBBtn color="dark" [flat]=true (click)="modal1.toggleModal()">
                        Done
                    </CDBBtn>
                </div>
            </div>
        </CDBCardBody>
    </CDBCard>
</CDBModal>
  `,
  styles: [
  ]
})
export class PopupComponent {

}
