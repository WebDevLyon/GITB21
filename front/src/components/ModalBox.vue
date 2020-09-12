<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">
      <div
        class="modal"
        role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription"
      >
        <header class="modal-header" id="modalTitle">
          <slot name="header">
            Ajouter un joueur à la base de données
            <button
              type="button"
              class="btn-close"
              @click="close"
              aria-label="Close modal"
            >x</button>
          </slot>
        </header>
        <section class="modal-body" id="modalDescription">
          <slot name="body">
            <div>
              <div class="row">
                <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                  <div class="notice fontBold" id="BuyPackerUserPictureIdNotice"></div>
                  <div id="BuyPackerUserPictureIdWrapper" class="formUpload">
                    <div class="notice fontBold" id="BuyPackerUserPictureIdNotice"></div>
                    <label
                      id="BuyPackerUserPictureIdLabel"
                      for="BuyPackerUserPictureId"
                    >Photo de profil</label>
                    <div
                      class="formUploadInputWrapper formUploadPicture formUploadUser formUploadDrop"
                    >
                      <div class="row-table colsMiddle height100">
                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                          <img
                            src="https://web-assoconnect-frc-prod-cdn-endpoint-software.azureedge.net/legacy/common/ico/ico.picture.64.dark.png"
                            class="_gif icoPicture64Dark"
                          />
                          <span>Pour ajouter une image, déposez un fichier ici ou</span>
                          <div class="formUploadInput">
                            <input
                              type="file"
                              accept="image/bmp, image/gif, image/jpeg, image/png"
                              name="BuyPackerUserPictureIdFile"
                            />
                            <div
                              id="BuyPackerUserPictureIdSendButton"
                              class="button buttonBlue buttonSmall formUploadInputButton"
                            >
                              <span>Envoyer</span>
                            </div>
                          </div>
                          <small class="fontItalic colorGreyDark">Taille recommandée : 200 x 200 px</small>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div id="BuyPackerUserPictureIdCropLightbox" class="displayNone">
                    <div
                      id="BuyPackerUserPictureIdCropContainer"
                      class="marginBottom10"
                      style="height:auto;"
                    >
                      <img src id="BuyPackerUserPictureIdCropImage" crossorigin="anonymous" />
                    </div>

                    <div
                      id="BuyPackerUserPictureIdCropSaveButton"
                      class="button textAlignCenter buttonBlue buttonLarge valignMiddle"
                    >
                      <span class="valignMiddle">Redimensionner</span>
                    </div>
                  </div>
                </div>
                <div class="col-lg-8 col-md-8 col-sm-8 col-xs-12">
                  <div class="row">
                    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                      <div id="BuyPackerUserFirstnameWrapper" class>
                        <div class="notice fontBold" id="BuyPackerUserFirstnameNotice"></div>
                        <label
                          id="BuyPackerUserFirstnameLabel"
                          for="BuyPackerUserFirstname"
                        >Prénom *</label>
                        <input
                          autocomplete="on"
                          id="BuyPackerUserFirstname"
                          placeholder="Prénom *"
                          name="BuyPackerUserFirstname"
                          type="text"
                          value
                          class
                        />
                      </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                      <div id="BuyPackerUserLastnameWrapper" class>
                        <div class="notice fontBold" id="BuyPackerUserLastnameNotice"></div>
                        <label id="BuyPackerUserLastnameLabel" for="BuyPackerUserLastname">Nom *</label>
                        <input
                          autocomplete="on"
                          id="BuyPackerUserLastname"
                          placeholder="Nom *"
                          name="BuyPackerUserLastname"
                          type="text"
                          value
                          class
                        />
                      </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                      <div id="BuyPackerUserMailWrapper">
                        <div class="notice fontBold" id="BuyPackerUserMailNotice"></div>
                        <label id="BuyPackerUserMailLabel" for="BuyPackerUserMail">Email</label>
                        <input
                          type="email"
                          name="BuyPackerUserMail"
                          id="BuyPackerUserMail"
                          value
                          placeholder="Email"
                          autocomplete="email"
                        />
                      </div>
                    </div>
                    <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                      <div id="BuyPackerUserPhoneLandlineWrapper">
                        <div class="notice fontBold" id="BuyPackerUserPhoneLandlineNotice"></div>
                        <label
                          id="BuyPackerUserPhoneLandlineLabel"
                          for="BuyPackerUserPhoneLandline"
                        >Téléphone fixe</label>
                        <div class="intl-tel-input allow-dropdown">
                          <div class="flag-container">
                            <div class="selected-flag" tabindex="0" title="France: +33">
                              <div class="iti-flag fr"></div>
                              <div class="iti-arrow"></div>
                            </div>

                            <input
                              type="tel"
                              name="BuyPackerUserPhoneMobileHelper"
                              id="BuyPackerUserPhoneMobileHelper"
                              value
                              autocomplete="off"
                              placeholder="ex : 06 12 34 56 78"
                            />
                          </div>
                          <input
                            type="hidden"
                            name="BuyPackerUserPhoneMobile"
                            id="BuyPackerUserPhoneMobile"
                            value
                          />
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                      <div class="notice fontBold" id="birthdayNotice"></div>
                      <div id="BuyPackerUserBirthdayWrapper" class="formDatetime">
                        <div class="notice fontBold" id="BuyPackerUserBirthdayNotice"></div>
                        <input
                          type="hidden"
                          name="BuyPackerUserBirthday"
                          id="BuyPackerUserBirthday"
                          value="0"
                        />
                        <label
                          id="BuyPackerUserBirthdayLabel"
                          for="BuyPackerUserBirthdayDateHelper"
                        >Date de naissance</label>

                        <input
                          class="dateInput dateFullWidth hasDatepicker"
                          type="text"
                          id="BuyPackerUserBirthdayDateHelper"
                          value
                          autocomplete="off"
                        />
                        <input type="hidden" id="BuyPackerUserBirthdayDate" value />
                        <input type="hidden" id="BuyPackerUserBirthdayHour" value="0" />
                        <input type="hidden" id="BuyPackerUserBirthdayMinute" value="0" />
                        <input type="hidden" id="BuyPackerUserBirthdaySecond" value="0" />
                      </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                      <div id="BuyPackerUserSexWrapper" class>
                        <div class="notice fontBold" id="BuyPackerUserSexNotice"></div>
                        <label id="BuyPackerUserSexLabel" for="BuyPackerUserSex">Sexe</label>
                        <select name="BuyPackerUserSex" id="BuyPackerUserSex" class>
                          <option value selected="selected">Choisissez</option>
                          <option value="F">Féminin</option>

                          <option value="M">Masculin</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </slot>
        </section>
        <footer class="modal-footer">
          <slot name="footer">
            <button type="button" class="btn-green" @click="close" aria-label="Close modal">Annuler</button>
            <button type="button" class="btn-green" @click="close" aria-label="Close modal">Valider</button>
          </slot>
        </footer>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "modal",
  methods: {
    close() {
      this.$emit("close");
    },
  },
};
</script>

<style>
.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background: #ffffff;
  box-shadow: 2px 2px 20px 1px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  width: 80%;
}

.modal-header,
.modal-footer {
  padding: 15px;
  display: flex;
}

.modal-header {
  border-bottom: 1px solid #eeeeee;
  color: #4aae9b;
  justify-content: space-between;
}

.modal-footer {
  border-top: 1px solid #eeeeee;
  justify-content: flex-end;
}

.modal-body {
  position: relative;
  padding: 20px 10px;
}

.btn-close {
  border: none;
  font-size: 20px;
  padding: 20px;
  cursor: pointer;
  font-weight: bold;
  color: #4aae9b;
  background: transparent;
}

.btn-green {
  color: white;
  background: #4aae9b;
  border: 1px solid #4aae9b;
  border-radius: 2px;
}
</style>