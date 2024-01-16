/**
 * File: /src/interfaces/UserCardI.ts
 * Created Date: Monday, January 15th 2024
 * Author: Nathan Coquelin
 * -----
 * Last Modified: Mon Jan 15 2024
 * Modified By: Nathan Coquelin
 * -----
 * HISTORY:
 * Date      	By	Comments
 * ----------	---	--------------------------------
 */

export interface UserCardI {
  nom: string;
  prenom: string;
  post: string;
  equipe: string;
  agence: string;
  photo_pro?: string;
  photo_fun: string;
}
